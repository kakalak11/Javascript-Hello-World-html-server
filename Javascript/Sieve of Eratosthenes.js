let n = 1000;
let sum = 0;

function makeList(n)
{
    let primeList = [0,0];

    for (let i = 2; i < n; i++)
    {
        primeList[i] = true;
    }

    console.log('List of number from 1 to n made !!!');
    return primeList;
}

function sievePrime(list)
{
    for (let i = 2; i < n; i++)
    {
        if (list[i] == true)
        {
            list[i] = i;
            sum += i
            for (let j = i*i; j < n; j += i)
            {
                list[j] = 0;
            }
        }
    }

    return list;
}

console.log(sievePrime(makeList(1000)));