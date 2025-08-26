import { Form, Link, redirect, } from "react-router-dom"
export default function CreatePost() {    
    return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: "#f9fafc",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "sans-serif"
    }}>   
    <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#2C3E50" }}>
        Create New Post
      </h2> 
    <Form method="post" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="title" style={{ marginBottom: "6px", fontWeight: 600 }}>Title</label>
        <input type="text" id="title" name="title"required style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px"
            }}/>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>    
        <label htmlFor="body" style={{ marginBottom: "6px", fontWeight: 600 }}>Body</label>
        <input type="text" id="body" name="body" required style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
              resize: "vertical"
            }}/>
            </div>

        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "12px",
          marginTop: "20px"
        }}>
        <Link to={'..'} style={{
              padding: "10px 18px",
              borderRadius: "6px",
              backgroundColor: "#ccc",
              color: "#2C3E50",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 500,
              transition: "background 0.3s",
            }}>cancel</Link>
        <button type="submit" style={{
              padding: "10px 18px",
              borderRadius: "6px",
              backgroundColor: "#0584ab",
              color: "white",
              border: "none",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056d6")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0584ab")}>submit</button>
        </div>
    </Form>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({request}: { request: Request }){
    const formentry = await request.formData()
    const postdata = Object.fromEntries(formentry)
    const result = await fetch('http://localhost:62323/',{
        method: 'POST',
        body: JSON.stringify(postdata),
        headers: {
            'Content-Type': 'application/json'
            }
        })
    if(result.ok){
        console.log('data uploaded successfully')
    }else {
        console.error('Internal Server Error')
    }    
    return redirect('/')   
}