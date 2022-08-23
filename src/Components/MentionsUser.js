export const MentionsUser = ({setCurUser, user, comment, sentiment }) => {
    const emotion =["😐"]
  return (
    <div className="table-heading flex-container box p-10 mr-15" key={comment}
        onClick={()=>setCurUser(user)}>
      <div className="flex-child-3 text-center font-bold">{user}</div>
      <div className="flex-child-3 text-center">{comment}</div>
      <div className="flex-child-3 text-center">{emotion[sentiment]}</div>
    </div>
  );
};
