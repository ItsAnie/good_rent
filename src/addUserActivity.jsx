import { ref, push } from "firebase/database";
import { database } from "./firebase";

export function addUserActivity(userId, productId, action){
    const activityRef = ref(database, `userActivity/${userId}/${action}`);
    push(activityRef, {
        productId,
        timestamp: Date.now(),
    });
}