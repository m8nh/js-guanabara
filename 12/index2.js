var agora = new Date()
var diaSem = agora.getDay()
/*
   0 = Ch
   1 = T2
   2 = T3
   3 =T4
   4 =T5
   5 =T6
   6 =T7

 */

console.log(diaSem)
switch (diaSem){
    case 0:
        console.log('CN')
        break
    case 1:
        console.log('T2')
        break
    case 2:
        console.log('T3')
        break
    case 3:
        console.log('T4')
        break
    case 4:
        console.log('T5')
        break
    case 5:
        console.log('T6')
        break
    case 6:
        console.log(T7)
        break
    default:
        console.log('[ERRO] Dia invalido')
}