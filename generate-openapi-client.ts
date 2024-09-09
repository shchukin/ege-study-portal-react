#!/usr/bin/env ts-node

import axios from 'axios';
import {generateApi} from 'swagger-typescript-api';
import path from 'node:path';
import * as fs from 'node:fs';
import dotenv from 'dotenv';
import * as https from "node:https";

dotenv.config();

const SCHEMA_API_URL = process.env.SCHEMA_API_URL;
const SCHEMA_NAME = 'swagger.yaml';

async function fetchYamlAndSave() {
    if (SCHEMA_API_URL === undefined) {
        throw new Error('Не указан BACKEND_SCHEMA_API_URL в .env файле.');
    }

    try {
        const filePath = path.join(process.cwd(), './' + SCHEMA_NAME);
        fs.rm(
            filePath,
            () => {
            }
        );

        const instance = axios.create({
            httpsAgent: new https.Agent({
                rejectUnauthorized: !process.env.SSL_SELF_SIGNED_IGNORE,
            }),
        });

        const response = await instance.get(SCHEMA_API_URL ?? '');
        if (response.status === 200) {
            const yamlContent = response.data;
            fs.writeFileSync(filePath, yamlContent, 'utf8');
            console.log(`YAML content has been saved to ${filePath}`);
        } else {
            console.error(`Failed to fetch YAML. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching YAML:');
        console.error(error);
    }
}

fetchYamlAndSave()
    .then(() => generateApi({
        silent: true,
        input: path.resolve(process.cwd(), './' + SCHEMA_NAME),
        output: path.resolve(process.cwd(), './api/swagger'),
        httpClientType: 'axios',
        unwrapResponseData: true,
        disableStrictSSL: true,
        modular: true,
        cleanOutput: true,
        templates: path.resolve(process.cwd(), './api/templates'),
        hooks: {
            onCreateRoute: (routeData) => {
                if (routeData.raw.method === 'description') {
                    return false;
                }
            }
        }
    }))
    .then(({files}) => {
        files.forEach(({fileName}) => {
            console.log(fileName);
        });
    })
    .catch((e) => console.error(e));
