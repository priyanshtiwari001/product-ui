
import { ALGORITHM } from './contants';
import * as crypto from 'crypto';


function deriveKey(password:string,salt:string){
const key = crypto.scryptSync(password,salt,32);
return key;
}

export function encryptData(text:string,password:string){
  const iv = crypto.randomBytes(12);
  const salt = crypto.randomBytes(16).toString('hex');
  const key = deriveKey(password,salt);
  const cipher = crypto.createCipheriv(ALGORITHM,key,iv);
  let encryptedValue = cipher.update(text,'utf-8','hex');
  encryptedValue +=cipher.final('hex');
  const authTag = cipher.getAuthTag();
  return {
    iv:iv.toString('hex'),
    encryptDetails: encryptedValue,
    authTag:authTag.toString('hex'),
    salt
  }
}


export function decryptData(password:string,encryptedObj:any){
const key = deriveKey(password,encryptedObj.salt);
const iv =  Buffer.from(encryptedObj.iv, 'hex');
const tag = Buffer.from(encryptedObj.authTag,'hex');
  const dicipher = crypto.createDecipheriv(ALGORITHM,key,iv);
  dicipher.setAuthTag(tag);
  let decryptValue = dicipher.update(encryptedObj.encryptDetails,'hex', 'utf8');
  decryptValue += dicipher.final('utf8');
  return decryptValue;
}