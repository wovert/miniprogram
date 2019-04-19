
const chars: any = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const random: any = function generateMixed(n: number) {
  var res: string = "";
  for (var i: number = 0; i < n; i++) {
    var id: number = Math.ceil(Math.random() * 35);
    res += chars[id];
  }
  return res;
}

const promisic = function(func: any){
    return function(params: object = {}){
        return new Promise((resolve, reject)=>{
            const args: any = Object.assign(params, {
                success:(res: any)=>{
                    // console.log(res)
                    // console.log(2222)
                    resolve(res)
                },
                fail:(error: any)=>{
                    reject(error)
                }
            })
            func(args)
        })
    }
}

export {random, promisic}