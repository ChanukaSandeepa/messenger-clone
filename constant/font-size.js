import { height } from '../constants/display';

export default {
    big : () => {
        if(height > 750){
            return 22
        } else if(height > 650){
            return 20
        } else if(height > 600){
            return 19
        } else if(height > 550){
            return 18
        } else if(height > 500){
            return 17
        } else {
            return 16
        }
    },
    ultraBig : () => {
        if(height > 750){
            return 26
        } else if(height > 650){
            return 25
        } else if(height > 600){
            return 24
        } else if(height > 550){
            return 22
        } else if(height > 500){
            return 20
        } else {
            return 18
        }
    },
    medium : () => {
        if(height > 750){
            return 18
        } else if(height > 650){
            return 17
        } else if(height > 600){
            return 16
        } else if(height > 550){
            return 15
        } else if(height > 500){
            return 14
        } else {
            return 13
        }
    },
    midMedium : () => {
        if(height > 750){
            return 15
        } else if(height > 650){
            return 14
        } else if(height > 600){
            return 13
        } else if(height > 550){
            return 12
        } else if(height > 500){
            return 12
        } else {
            return 11
        }
    },
    small : () => {
        if(height > 750){
            return 12
        } else if(height > 650){
            return 11
        } else if(height > 600){
            return 10
        } else if(height > 550){
            return 9
        } else if(height > 500){
            return 9
        } else {
            return 8
        }
    },
    ultraSmall : () => {
        if(height > 750){
            return 10
        } else if(height > 650){
            return 9
        } else if(height > 600){
            return 8
        } else if(height > 550){
            return 7
        } else if(height > 500){
            return 7
        } else {
            return 6
        }
    }
}

