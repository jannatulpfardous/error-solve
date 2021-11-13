import React from "react";
import Navbar from "../Navbar/Navbar" 
import "./doc.css";
const Doc = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="doc">
        <br />
        <h4 className="text-center" style={{fontFamily:"Besley"}}>Mini Documentation Relief Some Confusion If Needed.. </h4>
        <br />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 pt-3">
            <h6>
              {" "}
              (১) যখন কনফার্ম প্রোডাক্ট buy করার জন্য ফর্ম পেজে যাবে ফর্ম ফিলাপ
              করে সাবমিট বাটনে ৪ বার ক্লিক করতে হবে।
            </h6>
             {" "}

            <h6 className=" pt-3">
              (২) ইউজার লগইন এবং এডমিন লগইন সেপারেট করিনি , একটা লগইন
              সিস্টেম দিয়েই করবে। আর বাকেন্ড এ এডমিন ভারিভিফেশন সিস্টেম ও আছে
              ।তো ইউজার এবং এডমিন অটোমেটিকভাবে আলাদা হয়ে যাবে ।
            </h6>
             {" "}
            <h6 className=" pt-3">
              (৩) এডমিন অর্ডার স্ট্যাটাসে ক্লিক করে অর্ডার স্ট্যাটাস চেঞ্জ করতে
              পারবে।
            </h6 >
             {" "}
            <h6 className=" pt-3">(৪) রেটিং ভ্যালু ইনপুট হিসেবে 1,2,3,4,5 দিতে হবে।</h6>
            <h6 className=" pt-3">
              (৫) ড্যাশবোর্ডে হোম বাটন রাখা হয়েছে হোম পেজে ব্যাক করার জন্য।
            </h6>
             {" "}
           
            <h6 className=" pt-3">(৬)  এডমিন অফিসিয়াল   ইমেইল  পাসওয়ার্ড দিয়ে লগইন করবে , এবং ইউজার তার ইমেইল অ্যাড্রেস দিয়ে লগইন করবে।</h6>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Doc;
