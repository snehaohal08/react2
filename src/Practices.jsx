export const Preactices=()=>{
    const students=[1,2,3,4,5,5];
    return(
        <>
            <div>
                {/* <p>{students.length && "no student found"}</p> */}
                {/* <p>{students.length ===0 && "no student found"}</p> */}
                <p>{!students.length && "no stident found"}</p>
                <p>Number of student:{students.length}</p>
            </div>
        </>
    )
}