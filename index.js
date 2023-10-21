import mongoose from "mongoose";
import {app} from "./app.js"

const PORT = 5000;
const DB_URL = 'mongodb+srv://khushikandoi:khushidb@cluster0.bntwtrv.mongodb.net/horoscopedb?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
        .then(() => {
            console.log("DB Online");
            app.listen(PORT, () => {
            console.log(`App running on PORT ${PORT}`);
            });
        })
        .catch((e) => {
            console.log("Error", e);
        });




