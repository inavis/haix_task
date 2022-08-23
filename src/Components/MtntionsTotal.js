export const MentionsTotal = ({users,data,curUser}) => {
    console.log(data[curUser]);

    var read=0;
    var unread=0;
    data[curUser]["comments"].map(({read_status})=>{
        if(read_status.toLowerCase().includes("none")){
            unread+=1;
        }else{
            read+=1
        }
    })
  return (
    <div className="flex-container">
      <div className="flex-child-3 text-center">
        Total Count:<br></br>
        <span className="font-bold">{data[curUser]["comment_count"]}</span>
      </div>
      <div className="flex-child-3 text-center">
        Read: <span className="font-bold">{unread}</span>
      </div>
      <div className="flex-child-3 text-center">
        Unread: <span className="font-bold">{read}</span>
      </div>
    </div>
  );
};
