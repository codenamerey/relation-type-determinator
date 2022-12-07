function Output() {
    const sampleArray = [[1,2], [2,3], [3,4], [2,4], [1,3]];

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

    const checkTransitive = (set) => {
        let isTransitive = true;
        set.map(relation => {
            if(!hasProbability(relation, set)) {
                return;
            }
            let probableRelations = getPropableRelations(relation[1], set);
            probableRelations.map(probableRelation => {
                if(!hasSomeTransitive([relation[0], probableRelation[1]], set)) {
                    isTransitive = false;
                    console.log(hasSomeTransitive([relation[0], probableRelation[1]], set));
                    return;
                }
            })
        });

        function hasSomeTransitive(probableRelation, set) {
            console.log('probable relation is ',probableRelation);
            return set.some(relation => {
                console.log('relation is ', relation);
                return probableRelation[0] == relation[0] && probableRelation[1] == relation[1];
            })
        }

        function hasProbability(relation, set) {
            return set.some(rel => {
                return relation[1] == rel[0];
            });
        }

        function getPropableRelations(element, set) {
            return set.filter(rel => {
                return rel[0] == element;
            })
        }

        return isTransitive;
    }
    console.log('is reflexive? ', checkReflexive(sampleArray));
    console.log('is symmetrical? ',checkSymmetrical(sampleArray));
    console.log('is transitive? ',checkTransitive(sampleArray));

    return (
        <div className="output">

        </div>
    )
}

export default Output;