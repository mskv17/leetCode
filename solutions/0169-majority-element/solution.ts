function majorityElement(nums: number[]): number {
    let obj:object = {};
    let popular:number|null = null;
    let popularVal:number = 0;
    for(const num of nums) {
        obj[num]=(obj[num]+1||1);
        if(popular===null) {
            popular = num;
        } else {
            if (num!==popular&&obj[num]>popularVal) {
                popularVal = obj[num];
                popular = num;
            }
            if(num===popular) {
                popularVal = obj[num];
            }
        }
    }
    return popular;
};
