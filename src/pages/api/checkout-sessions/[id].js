import { stripe } from "@/utils/store"

export async function handler(req,res){
  if(req.method === "GET"){
  const id= req.query.id;
   try {
    if(!id.startsWith('cs_')){
      throw new Error("incorrect checkout session id");
    }
    const checkoutSession = await stripe.checkout.sessions.retrieve(id);
    res.status(200).json(checkoutSession);
   } catch (error) {
    console.log(error);
    res.status(500).json({statusCode:500 , message:message.error});
   }}else{
  res.setHeader("Allow","GET")
  res.status("405").end("Method not allowed")
}
}