import fs from "fs";

class Graph {
    adjacencyList: { [key: number]: number[] };

    constructor() {
        this.adjacencyList = {};
    }

    // Add an edge to the graph
    addEdge(u: number, v: number): void {
        if (!this.adjacencyList[u]) {
            this.adjacencyList[u] = [];
        }
        if (!this.adjacencyList[v]) {
            this.adjacencyList[v] = [];
        }
        this.adjacencyList[u].push(v);
        // this.adjacencyList[v].push(u);
        // console.log(this.adjacencyList);
    }

    // Remove self-loops and merge vertices
    private contractEdge(u: number, v: number): void {
        const uNeighbors = this.adjacencyList[u]!;
        const vNeighbors = this.adjacencyList[v]!;
        // console.log("Neighbors U: ", uNeighbors, "Neighbors V: ", vNeighbors);

        // Remove self-loops and merge v’s edges to u
        for (const neighbor of vNeighbors) {
            if (neighbor !== u) {
                uNeighbors.push(neighbor);
                // Remove v from neighbor's list
                this.adjacencyList[neighbor] = this.adjacencyList[
                    neighbor
                ].filter((n) => n !== v);
                // Add u to neighbor's list
                this.adjacencyList[neighbor].push(u);
            }
        }
        this.adjacencyList[u] = this.adjacencyList[u].filter((n) => n !== v);

        // Remove v from the graph
        delete this.adjacencyList[v];
    }

    // Randomly select an edge and contract it
    private randomContract(): number {
        const vertices = Object.keys(this.adjacencyList).map(Number);
        const u = vertices[Math.floor(Math.random() * vertices.length)];
        const uNeighbors = this.adjacencyList[u];
        const v = uNeighbors[Math.floor(Math.random() * uNeighbors.length)];
        // console.log("verteces to be contracted", u, v);
        this.contractEdge(u, v);
        return Object.keys(this.adjacencyList).length;
    }

    // Karger's algorithm to find the minimum cut
    minCut(trials: number): number {
        let minCutSize = Infinity;

        for (let i = 0; i < trials; i++) {
            const graphCopy = new Graph();

            // Deep copy the original graph
            for (const key in this.adjacencyList) {
                const neighbors = this.adjacencyList[key];
                neighbors.forEach((neighbor) => {
                    graphCopy.adjacencyList[key]
                        ? graphCopy.adjacencyList[key].push(neighbor)
                        : (graphCopy.adjacencyList[key] = [neighbor]);
                });
            }
            // console.log("Deep Copy: ", graphCopy);
            // Contract edges until only 2 vertices remain
            while (Object.keys(graphCopy.adjacencyList).length > 2) {
                graphCopy.randomContract();
                // console.log(graphCopy.adjacencyList);
            }

            // The cut size is the number of edges between the two remaining vertices
            const remainingVertices = Object.keys(graphCopy.adjacencyList).map(
                Number
            );
            const remainingNeighbors =
                graphCopy.adjacencyList[remainingVertices[0]];
            minCutSize = Math.min(minCutSize, remainingNeighbors.length);
        }

        return minCutSize;
    }
}

// // Example usage
// const graph = new Graph();

// graph.addEdge(1, 2);
// graph.addEdge(1, 3);
// graph.addEdge(2, 3);
// graph.addEdge(2, 4);
// graph.addEdge(3, 4);

// const trials = 100; // Number of trials to improve accuracy
// const minCut = graph.minCut(trials);
// console.log(`Estimated minimum cut size: ${minCut}`);
const string = fs.readFileSync("./src/graphTest.txt").toString();
const line = string.split("\r\n").map((line) =>
    line
        .split("\t")
        .filter((str) => str !== "")
        .map((str) => +str)
);
// console.log(line);
const graph = new Graph();
for (let i = 0; i < line.length; i++) {
    for (let j = 1; j < line[i].length; j++) {
        graph.addEdge(line[i][0], line[i][j]);
    }
}
const trials = 1000;
const minCut = graph.minCut(trials);
console.log(`Estimated minimum cut size: ${minCut}`);
