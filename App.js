console.log("Message to Developer")
function Alertmsg()
{
    const Sri=()=>{alert("Message from Java Alert!")}
  return <div><button onClick={Sri}>Click</button></div>
}
ReactDOM.render(<Alertmsg/>,document.getElementById('mydiv'))

