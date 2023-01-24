function Output(props) {
    const { sampleArray, rawInput } = props;
    const checkReflexive = (set) => {
        return set.every(relation => {
             return hasSomeReflection(relation[0], set) && hasSomeReflection(relation[1], set);
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
        for (const relation of set) {
            if(!hasProbability(relation, set)) {
                continue;
            }
            let probableRelations = getPropableRelations(relation[1], set);
            console.log(probableRelations);
            for (const probableRelation of probableRelations) {
                if(!hasSomeTransitive([relation[0], probableRelation[1]], set)) {
                    isTransitive = false;
                }
            }
        }

        function hasSomeTransitive(probableRelation, set) {
            return set.some(relation => {
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


    const checkAssymetrical = (set) => {
        let isAssymetrical = false;

        isAssymetrical = set.every((relation) => {
            let relationReversed = (relation.slice()).reverse()
            return checkAssymetry(relationReversed, set);
        })

        function checkAssymetry(element, set) {
            if(set.includes(element)) {
                if(!(element[0] == element[1])) {
                    console.log(element, ': FALSE');
                    return false;
                }

                return true;
            } else {
                console.log(element, ': TRUE');
                return true;
            }
        }

        return isAssymetrical;
    }

    return (
        <div className="output">
            <h3>Relation for set &#123;{rawInput}&#125;</h3>
            <p>Is it reflexive? <strong>{checkReflexive(sampleArray).toString()}</strong></p>
            <p>Is it symmetric? <strong>{checkSymmetrical(sampleArray).toString()}</strong></p>
            <p>Is it antisymmetric? <strong>{(checkAssymetrical(sampleArray)).toString()}</strong></p>
        </div>
    )
}

export default Output;