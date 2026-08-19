function maxProfit(prices: number[]): number {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i:number =0;i<prices.length;i++) {
        if(prices[i]<minPrice) {
            minPrice = prices[i];
        } else {
            const profit = prices[i]-minPrice;
            if(profit>maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};
