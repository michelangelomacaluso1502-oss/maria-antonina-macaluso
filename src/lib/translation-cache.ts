'use client';
const DB_NAME='mam-translations',DB_VERSION=1,STORE='translations',MAX_MEM=5000;
class LRU{private m=new Map<string,string>();constructor(private max:number){}get(k:string){const v=this.m.get(k);if(v!==undefined){this.m.delete(k);this.m.set(k,v)}return v}set(k:string,v:string){if(this.m.has(k))this.m.delete(k);else if(this.m.size>=this.max){const f=this.m.keys().next().value;if(f)this.m.delete(f)}this.m.set(k,v)}has(k:string){return this.m.has(k)}clear(){this.m.clear()}get size(){return this.m.size}}
const mem=new LRU(MAX_MEM);
let dbP:Promise<IDBDatabase|null>|null=null;
function openDB():Promise<IDBDatabase|null>{if(typeof window==='undefined')return Promise.resolve(null);if(dbP)return dbP;dbP=new Promise(r=>{try{const req=indexedDB.open(DB_NAME,DB_VERSION);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(STORE))db.createObjectStore(STORE)};req.onsuccess=()=>r(req.result);req.onerror=()=>r(null)}catch{r(null)}});return dbP}
function idbGet(k:string):Promise<string|null>{return openDB().then(db=>{if(!db)return null;return new Promise(r=>{try{const tx=db.transaction(STORE,'readonly');const req=tx.objectStore(STORE).get(k);req.onsuccess=()=>r(req.result??null);req.onerror=()=>r(null)}catch{r(null)}})})}
function idbSet(k:string,v:string):Promise<void>{return openDB().then(db=>{if(!db)return;return new Promise(r=>{try{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(v,k);tx.oncomplete=()=>r();tx.onerror=()=>r()}catch{r()}})})}
function idbBatchSet(entries:Array<[string,string]>):Promise<void>{return openDB().then(db=>{if(!db)return;return new Promise(r=>{try{const tx=db.transaction(STORE,'readwrite');const s=tx.objectStore(STORE);for(const[k,v]of entries)s.put(v,k);tx.oncomplete=()=>r();tx.onerror=()=>r()}catch{r()}})})}
function ck(text:string,lang:string){return`${lang}::${text}`}
export async function getCachedTranslation(text:string,lang:string):Promise<string|null>{const k=ck(text,lang);const mv=mem.get(k);if(mv!==undefined)return mv;const iv=await idbGet(k);if(iv){mem.set(k,iv);return iv}return null}
export async function setCachedTranslation(text:string,lang:string,t:string):Promise<void>{const k=ck(text,lang);mem.set(k,t);idbSet(k,t)}
export async function batchSetCachedTranslations(entries:Array<{text:string;lang:string;translation:string}>):Promise<void>{const ie:Array<[string,string]>=[];for(const{text,lang,translation}of entries){const k=ck(text,lang);mem.set(k,translation);ie.push([k,translation])}await idbBatchSet(ie)}
export function clearCache(){mem.clear()}
