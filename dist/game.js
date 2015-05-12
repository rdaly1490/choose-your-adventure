function* chooseYourAdventure() {
	// console.log(yield adventure.say('Hey there!'));
	// console.log(yield adventure.say('Woah', 'This is cool'));
	// console.log(yield adventure.ask('Woah', 'This is cool'));
	// console.log(yield adventure.choose('Woah', 'This is cool', 'Hello world'));
	// console.log(yield adventure.say('That\'s all folks!', 'THE END'));

	yield adventure.say("Hi there, welcome to the Pokemon choose your own adventure.  If you're ready to play click continue!");

	var myName = yield adventure.ask("First, tell me your name.");

	var correct = yield adventure.choose("Your name is " + myName +", is that right?","Yes","No");

	if (correct==="Yes") {
		yield adventure.say("Great, let's get started then " + myName);
	}
	else {
		myName = yield adventure.ask("Oops, what is your name then?");
		yield adventure.say("Great, let's get started then " + myName);
	}

	yield adventure.say("Ok " + myName +" , time to select your starter Pokemon.  Let's do this!");

	var myChoice = yield adventure.choose("Choose your starter pokemon:","Squirtle","Bulbasaur","Charmander");

	yield adventure.say("You chose " + myChoice + "! That's a great choice!");

	var direction = yield adventure.choose("Ok time to leave home behind and get started.  Do you want to head to the North or the South?","North","South");

	yield adventure.say("Great, " + direction + " it is then.");

	var encounter = yield adventure.choose("As you walk through the tall grass a wild Pikachu appears!  Do you wish to battle?","Fight!","Run!");

	var yourHp = 30;

	var opponentHp = 12;

	var strength = Math.random();

	if (encounter==="Fight!") {
		while (opponentHp > 0) {
			var attack = yield adventure.choose("Choose your attack:","Tackle","Bite");
			if (attack==="Tackle") {
				var damage = (10 * strength);
				opponentHp = opponentHp - damage;
				yield adventure.say("Nice hit!  Pikachu has " + Math.ceil(opponentHp) + " HP remaining");
			}
			else {
				var damage = (8 * strength);
				opponentHp = opponentHp - damage;
				yield adventure.say("Nice hit!  Pikachu has " + Math.ceil(opponentHp) + "HP remaining");
			}
		}

		yield adventure.say("Pikachu fainted!  Congrats on your first victory!");

	}
	else {
		yield adventure.say("You got away safely");
	}

	yield adventure.say("That was an exciting first day on the road!  Better get some rest and continue your adventure tomorrow.  Thanks for playing!");



}
