'use client'
import React, { useState } from "react";
import { postData } from "../common/SharePostOnLinkedIn";

const SharePost = () => {
const [message, setMessage] = useState("")

const SharePostOnLinkedIn = async() => {
  const url = "https://api.linkedin.com/v2/ugcPosts";
  const body = {
    "author": "urn:li:person:vALojHUKVs",
    "lifecycleState": "PUBLISHED",
    "specificContent": {
        "com.linkedin.ugc.ShareContent": {
            "shareCommentary": { 
                "text": `${message}`
            },
            "shareMediaCategory": "NONE"
        }
    },
    "visibility": {
        "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
    }
};
  const accessToken = "AQVrT0ReFde_R2xh3E_MP1pRDKogQu36-NKcBTOhHnyRPJhN5B0qzMwfECvngGEoMNU4ItqlXmCH8TGVDhE7r0q1hqg90RbnmesT0UvXOikSQGFToPzkPqGmJ6jXfceq0-p4XtzhvLrFo6nmExX5G04dxbKjUFukpkxY23xgX_0RqYtwclP7LnAytVt2HrOdTJJ-cuiVcV9ZrE-7aZnyfeR4tfvKpqfglF30oP1M9Cvv1Gq6J9v01guOfSmQqILNm9JKmw84hEfcVm2myzgipeMG0zY9O5zuQ9ZIGIP-Iio34OOQlENmjTizr7MW3RI8v6YW3Isv4QEvl-eYDeFLOhpign7ryQ";
  try{
    const response = await postData(url, body, accessToken);
    return await response
  }
  catch(error){
    console.log("Error",error)
  }
}
  return (
    <div className="flex flex-col items-center">
      <label
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        className="p-2 w-[20%]  border-gray-200 border-2 outline-none"
        name="Message"
        id="message"
        placeholder=""
        onChange={(e:any) => setMessage(e.target.value)}
      />
      <button onClick={SharePostOnLinkedIn}>Submit</button>
    </div>
  );
};

export default SharePost;
