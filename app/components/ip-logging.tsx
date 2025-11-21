"use client"
import { useEffect, useState } from "react";
// import { appendFile } from 'node:fs/promises';

// const filePath = '../ip_addresses.txt';




export default function MyIPLogger() {
    // const filePath = '../ip_addresses.txt';
    // const timeNow = Date.now();
    // const contStr = timeNow + " ";
    const [ipAddr, setAddr] = useState('0.0.0.0');
    // const content = timeNow + contStr + ipAddr;

    useEffect(() => {
  //Runs only on the first render
  fetch("https://api.ipify.org/?format=json")
        .then(response => response.json())
        .then(data => {
            setAddr(JSON.stringify(data.ip))

        })
        // .then(() => appendFile(filePath, content, 'utf-8'))
        .catch(error => {
          console.error("Error fetching IP address:", error);
        });
}, []);
    return <div>
        <p className="text-[10px]">Your IP address is: {ipAddr}</p>
    </div>
}