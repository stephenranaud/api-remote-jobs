import getJobs from "./function/functions-fetch.js";
import * as fileManager from "./function/functions-file.js";
import fetch from 'node-fetch';
import e from "express";

// fileManager.readFile('./datas.json').then(
//     datas => console.log(datas)
// );

const html = `<h1>Hello</h1>`;

async function t() {
    let e = await fetch("https://api.postmarkapp.com/email", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-Postmark-Server-Token": "server token"
        },
        body: JSON.stringify({
            To: "lecomte.sairuss@gmail.com",
            From: "lecomte.sairuss@gmail.com",
            Subject: "This is a test",
            HtmlBody: html
        })
    });

    return e;
}

t().then(g => {
        console.log(g.status);
        console.log(g);
    })
    .catch(e => console.log("Error: " + e));