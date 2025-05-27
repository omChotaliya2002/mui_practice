import axios from "axios";
import { Typography } from "@mui/material";
import Image from "next/image";


// Define a type for the expected params structure : 📌
interface RecipeDetailParams {
    id : string
}

// Define the Props type for the component : 📌
interface RecipeDetailProps {
    params : Promise<RecipeDetailParams>;    //params is a promise
}




export default async function RecipeDetail({params} : RecipeDetailProps) {

         const {id} = await params;   // Await the params to destructure the 'id'👍👍

        const res = await axios.get(`https://dummyjson.com/recipes/${id}`);
        const recipe = res.data;


return(

<>
<div className="w-full h-full" style={{backgroundColor : "#fef8dd", border:"0.1px solid black"}}>

    <div className="flex items-center justify-center mt-[80px] mb-[20px]">
        <Typography className="underline underline-offset-4" fontFamily={"var(--font-cinzel)"} sx={{fontWeight : "bold", color : "orangered", fontSize : "27px"}}> {recipe.name} </Typography>
    </div>

    <div className="flex flex-col space-y-3 items-center justify-center mt-[10px] mb-[70px]">

            <Image className="rounded-lg hover:scale-105 border-[1.2px] border-gray-500 hover:border-b-[3.5px] hover:border-b-red-600 transition-all delay-100 mt-[20px] mb-[30px] select-none" 
               src={recipe.image} alt="recipe" height={200} width={200}/>

                <h1> 🟠 Cuisine : <strong className="font-serif text-[16.5px]"> {recipe.cuisine} </strong> </h1>

            <div className="flex gap-x-6">

                    <h1> ⭐ Rating : <strong className="text-[16.5px]"> {recipe.rating} </strong> </h1>
                    <h1> 👍 Review Count : <strong className="text-[16.5px]"> {recipe.reviewCount} </strong> </h1>
            </div>

            <h1 className="mb-[30px]"> 🥣 Servings : <strong className="text-[16.5px]"> {recipe.servings} </strong> </h1>

            <Typography className="flex gap-x-3" sx={{fontSize : "28px", fontWeight : "bold", marginBottom : "20px", fontFamily : "var(--font-cinzel)"}}> 
                <Image src={"/images/ingredients.svg"} alt="ingredients" height={42} width={42} className="select-none"/> Ingredients :  
            </Typography>

                    <ul className="list-disc list-inside ml-[40px]">

                        {
                            recipe.ingredients.map((ing : string, index : number)=> (
                                <li className="text-[17.5px] font-serif" key={index}> {ing}  </li>
                            ))
                        }

                    </ul>

                    

    </div>


</div>



</>  


  )
}

