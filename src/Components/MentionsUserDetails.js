import { Fragment } from "react";

export const MentionsUserDetails =({users,data,curUser}) =>{
    // console.log(data[curUser]["comments"])
    const emotion =["😐"]
    const comments = data[curUser]["comments"];
    return(
      <Fragment>
        {
            comments.map((ele)=>{
                var [day,month,number,year] = String(new Date(ele.date.split("T")[0])).split(" ");
                
                return (
                    <div className="table-heading" key={day+month+number+year}>
                    <div className="flex-container box p-10 ml-15">
                           <div className="flex-child-25 text-center font-bold">{day} {month} {number} {year}</div>
                           <div className="flex-child-25 text-center font-bold">{curUser}</div>
                           <div className="flex-child-25 text-center font-bold"><span>Post sentiment:</span>{emotion[ele.sentimentPolarity]}</div>
                           <div className="flex-child-25 text-center">{ele.read_status.toLowerCase().includes("not")?"✅":""}</div>
                   </div>
                   <div className="flex-container box p-10 ml-15">{ele.text}</div>
                </div>
                )
            })
        }
      </Fragment>
    )
}