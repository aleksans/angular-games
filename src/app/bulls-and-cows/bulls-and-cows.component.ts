import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulls-and-cows',
  templateUrl: './bulls-and-cows.component.html',
  styleUrls: ['./bulls-and-cows.component.css']
})
export class BullsAndCowsComponent implements OnInit {

  generatedValue = "";
  gameLog: string[] = [];
  bullsCowsObj: BullsCows;

  constructor() { }

  ngOnInit() {
    this.startNewGame();
    this.bullsCowsObj = new BullsCows();
  }

  guess(userInput: string): void {
    console.log('User input:' + userInput);
    var result = this.calculateBullsAndCows(userInput);
    var outputString = `[${this.gameLog.length + 1}]          ${userInput}          ${result.bulls}B${result.cows}C`;
    this.gameLog.push(outputString);
    if(result.isFinished){
      this.gameLog.push("You WIN!");
    }
  }

  startNewGame(): void{
    this.bullsCowsObj = new BullsCows();
    this.generatedValue = "";
    this.gameLog = [];
    for(var i = 0; i < 4; i++){
      this.generatedValue += this.generateNextNumber();
    }

    console.log("Generated value: ",  this.generatedValue);
  }

  private calculateBullsAndCows(userInput: string): BullsCows{
    var bulls = 0;
    var cows = 0;
    var bcMap = {};
    for(var i = 0; i < 4; i++){
      var currentNumber = userInput[i];
      var itemIndex = this.generatedValue.indexOf(currentNumber);
      bcMap[currentNumber] = bcMap[currentNumber] || { isBull: false, isCow: false };

      if(~itemIndex){
        if(itemIndex === i){
          bcMap[currentNumber].isBull = true;
          bulls++;
          console.log("add bull", currentNumber);
          if(bcMap[currentNumber].isCow){
            cows--;
            console.log("decrease cow", currentNumber);
          }
        }else if(!bcMap[currentNumber].isCow && !bcMap[currentNumber].isBull){
          bcMap[currentNumber].isCow = true;
          cows++;
          console.log("add cow", currentNumber);
        }
      }
    }   

    this.bullsCowsObj.bulls = bulls;
    this.bullsCowsObj.cows = cows;
    this.bullsCowsObj.isFinished = bulls === 4;

    return this.bullsCowsObj;
  }

  private generateNextNumber(): number{
    var nextNumber = Math.floor(Math.random() * 6) + 1;
    if(~this.generatedValue.indexOf(nextNumber.toString())){
      return this.generateNextNumber();
    }

    return nextNumber;
  }
}

class BullsCows {
  bulls: number = 0;
  cows: number = 0;
  isFinished: boolean = false;
}
