import connectDB from '../../DB/connection.js';
import AuthRouter from './Auth/Auth.router.js';
import MessageRouter from './Message/Message.router.js';
import UserRouter from './User/User.router.js'; 
const initApp=(app,express)=>{
    app.use(express.json());
    const port = 4000
    connectDB().then(()=>{
        app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
    });
    app.use('/',(req,res)=>{
       return res.send("Hello Everyone!!");
    })
    app.use("/auth",AuthRouter);
    app.use("/user",UserRouter);
    app.use("/message",MessageRouter);
    app.use('/*',(req,res)=>{
    return res.json({Message:"Page Not Found"});
    })
}
export default initApp;