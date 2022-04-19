import path from 'path';
import { dirname } from 'path';
import fsPromises from 'fs/promises';
import fileURLToPath from 'url';


const fileName = fileURLToPath(
    import.meta.url);
const __dirName = dirname(fileName);


/**
 * 
 * @param {string} path 
 * @returns {Promise}
 */
export async function readFile(pathFile) {

    const filePath = path.resolve(__dirName, pathFile)
    try {
        return JSON.parse(await fsPromises.readFile(filePath));
    } catch (error) {
        throw Error(`Error: ${error}`);
    }
}

/**
 * 
 * @param {string} path 
 * @returns {Promise}
 */
export async function writeFile(path) {

}