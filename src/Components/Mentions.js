import { useEffect, useState } from "react"
import { MentionsUser } from "./MentionsUser";
import { MentionsUserDetails } from "./MentionsUserDetails";
import { MentionsTotal } from "./MtntionsTotal";

export function Mentions(){

    const [data,setData] = useState([]);
    const [users,setUsers] = useState(null);
    const [curUser,setCurUser] = useState(null);

    useEffect(()=>{
        fetch('response.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then((response)=>{
            // console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            // console.log(myJson.stats.instagram.timelineStats.timeline["0"].topInfluencers.neutralInfluencers);
            setData(myJson.stats.instagram.timelineStats.timeline["0"].topInfluencers.neutralInfluencers)
          });
    },[])

    useEffect(()=>{
        setUsers(Object.keys(data));
        
    },[data])
    useEffect(()=>{
        if(users){setCurUser(users[0]);}
    },[users])

    return(
       curUser?
       <div className="flex-container">
       <div className="flex-child-1">
           <div className="table-heading flex-container box p-10 mr-15">
               <div className="flex-child-3 text-center font-bold">Username</div>
               <div className="flex-child-3 text-center font-bold">Comments<i className="fa fa-arrow-down"></i></div>
               <div className="flex-child-3 text-center font-bold">Sentiment<i className="fa fa-arrow-down"></i></div>
           </div>
           {
            users.map((ele,index)=>(
                // console.log(ele,data[ele],data[ele]["comment_count"],data[ele]["sentimentPolarity"][0])
                <MentionsUser setCurUser={setCurUser} user={ele} comment={data[ele]["comment_count"]} sentiment={data[ele]["sentimentPolarity"][0]} key={ele}/>
            ))
           }
       </div>
       <div className="flex-child-2 ">
           <div className="flex-container box ml-15">
               {/* <div className="table-heading"> */}
               <div className="flex-child-1">
                   <h3>Influencer Comments</h3>
               </div>
               <div className="flex-child-2">
                   <MentionsTotal users={users} data={data} curUser={curUser}/>
               </div>
               {/* </div> */}
           </div>
           <div className="flex-container box p-10 ml-15">
                   <div className="flex-child-25 text-center">Updated<i className="fa fa-arrow-down"></i></div>
                   <div className="flex-child-25 text-center">Username</div>
                   <div className="flex-child-25 text-center">Sentiment<i className="fa fa-arrow-down"></i></div>
                   <div className="flex-child-25 text-center">Mark as Read</div>
           </div>
           {
            <MentionsUserDetails users={users} data={data} curUser={curUser}/>
           }
       </div>
   </div>
   :""
    )
}