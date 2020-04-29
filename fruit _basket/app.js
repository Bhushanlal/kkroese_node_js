const fs = require('fs');
var fruitData = require('./input.json')
var outputValue = {};

class FruitBasket {
    
    // output file
    writeoutput(outputValue){
        var finalOutput = [outputValue]
        let data = JSON.stringify(finalOutput);
        fs.writeFileSync('output.json', data);
        
    }
    
}

class Fruit extends FruitBasket{
    
     countFruitsNumber(){
        outputValue.total_fruits = fruitData[0].contents.length;

     }

     getId(){
        outputValue.id = fruitData[0].id;

     }

     totalWeight(){
         var totalWeight = 0;
         fruitData[0].contents.forEach((fruits,index) => {
            totalWeight = totalWeight + fruits.weight;
         });

         outputValue.total_weight = totalWeight;
     }

     fruitsCount(){
        var allFruits = [];
        var fruit_counts = [];

        fruitData[0].contents.forEach((fruits,index) => {
            if(allFruits.indexOf(fruits.type) !== -1){
                let fruitobj = fruit_counts.find(fruitName => fruitName.type === fruits.type);
                let fruitindex = fruit_counts.indexOf(fruitobj);
                var newCount = fruitobj.count + 1
                fruit_counts[fruitindex] = {
                    "type": fruits.type,
                    "count":newCount
                }
                
            } else{
                allFruits.push(fruits.type);
                fruit_counts.push({
                    "type": fruits.type,
                    "count": 1
                  });
            }
            
         });
         outputValue.fruit_counts = fruit_counts;

     }


     getOutput(){
            this.getId();
            this.countFruitsNumber();
            this.totalWeight();
            this.fruitsCount();
            this.writeoutput(outputValue);
     }

}

FruitBasket = new Fruit()
FruitBasket.getOutput()