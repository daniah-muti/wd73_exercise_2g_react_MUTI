function ListCard(props) {
  const { task, deadline, progress } = props; // destructuring

  let progressTracking;
  if (progress < 50) {
    progressTracking = <h4><i>Notice me, Master.</i></h4>
  } else if (progress > 50) {
    progressTracking = <h4><i>You're doing great, Master!</i></h4>
  } 

  return (
    <>
    <div className={`card m-3 shadow ${progress < 50 ? 'bg-danger' : 'bg-light'}`}>
      <div className="card-body">
        <p>Task: <span className="fw-bold">{task}</span></p>
        <p>Deadline: <span className="fw-bold">{deadline}</span></p>
        <p>Progress: <span className="fw-bold">{progress}%</span></p>
        {progressTracking}
      </div>
    </div>
    </>
  )
}

export default ListCard
