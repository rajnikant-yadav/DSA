
function towerOfHanoi(n, A,  B,  C)
{
        if (n == 0)
        {
            return;
        }
        towerOfHanoi(n - 1, A, C, B);
        console.log("Move disk " + n + " from rod " + A +
        " to rod " + C);
        towerOfHanoi(n - 1, B, A, C);
    }
 
    // Driver code
    var N = 3;
     
    // A, B and C are names of rods
towerOfHanoi(N, 'A', 'B', 'C');


// Move disk 1 from rod A to rod B
// Move disk 2 from rod A to rod C
// Move disk 1 from rod B to rod C
// Move disk 3 from rod A to rod B
// Move disk 1 from rod C to rod A
// Move disk 2 from rod C to rod B
// Move disk 1 from rod A to rod B
// Move disk 4 from rod A to rod C
// Move disk 1 from rod B to rod C
// Move disk 2 from rod B to rod A
// Move disk 1 from rod C to rod A
// Move disk 3 from rod B to rod C
// Move disk 1 from rod A to rod B
// Move disk 2 from rod A to rod C
// Move disk 1 from rod B to rod C


 
