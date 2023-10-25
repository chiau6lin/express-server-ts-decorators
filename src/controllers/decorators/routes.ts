import "reflect-metadata";
import { Methods } from "./methods";
import { MetadataKeys } from "./MetadataKeys"; 

function routeBinder(method: string) {
  // factory decorator
  return function(path: string) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    }
  }
}


export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);