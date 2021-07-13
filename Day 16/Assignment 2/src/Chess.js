import "./chess.css"
const a = [];
for(let i = 0; i < 64; i++){
    a.push(i)
}
let flag=1
function Chess() {
    return (
        <div className="outer">

            <div className="inner">
                <div className="chess">
            {
                a.map(i => {

                    if ((i) % 8 === 0)
                    {
                        flag=1-flag
                    }

                return <div className = "chess__box" >
                    {
                        <div className="chess__boox" style={{backgroundColor:(i%2===flag)?"black":"white"}}>

                        </div>    
                    }
                </div>;
                })
            }
                </div>
            </div>
        </div>
    );
};
export default Chess