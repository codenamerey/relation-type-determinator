function Output() {
    const sampleArray = [[1, 1], [2, 2], [3,3],[1,3], [3,1]];

    const checkReflexive = (set) => {
        return set.every(relation => {
             return hasSomeReflection(relation[0], set);
        });

        function hasSomeReflection(element, relations) {
            return relations.some(relation => {
                return element == relation[0] && element == relation[1];
            });
        }
    }

    const checkSymmetrical = (set) => {
        return set.every(relation => {
            let relationReversed = (relation.slice()).reverse();
            return hasSomeSymmetry(relationReversed, set);
        });

        function hasSomeSymmetry(element, relations) {
            return relations.some(relation => {
                return element[0] == relation[0] && element[1] == relation[1]
            });
        }
    }
    console.log('is reflexive? ', checkReflexive(sampleArray));
    console.log('is symmetrical? ',checkSymmetrical(sampleArray));

    return (
        <div className="output">

        </div>
    )
}

export default Output;