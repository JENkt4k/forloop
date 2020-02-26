//https://www.reddit.com/r/RaidShadowLegends/comments/axrjsk/game_mechanics_summary_gearing_calculator/

//raw Atttack Damage
//ABILITY_MULT * ATK * (1 + CRIT_C * CRIT_D)
//ABILITY_MULT (ex "water vs water == 1", "water vs fire == 2", "fire vs water == 1/2" )
//ATK ex hammer does 150 damage
// CRIT_C == "30 % " chance of critical
// CRIT_D

const ATK_STRONG = 2.5;
const ATK_WEAK = 0.40;
const CRIT = 0.50;
const Sword = 1000;
const Hammer = 800;
const Helm = 200;
const Platemail = 300;

function attackDamage(weaponStrength, multiplier){
  console.log(`ATK=${weaponStrength*multiplier} x ${1+CRIT}`);
  return ((weaponStrength*multiplier)*(1+CRIT));
}

function defenseFactor(attackerLvl, defenderLevel){
  let factor = 1;
  if(defenderLevel > attackerLvl){
    factor = (attackerLvl/defenderLevel)*defenderLevel;
    console.log(`ratio ${attackerLvl/defenderLevel} = factor ${factor} `);
  }
  return factor;
}

function calculateDamage(attackDamage, defenseFactor){

  return attackDamage*defenseFactor; 
}

calculateDamage(attackDamage(Sword,ATK_WEAK), defenseFactor(Helm+Platemail,5,5));
calculateDamage(attackDamage(Sword,ATK_WEAK), defenseFactor(Helm+Platemail,4,5));
calculateDamage(attackDamage(Sword,ATK_WEAK), defenseFactor(Helm+Platemail,4,2));

console.log(40);