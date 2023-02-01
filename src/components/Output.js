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

    function checkTransitivity(set) {
        return set.every(element => {
            let first_item = element[0];
            let second_item = element[1];
            // Does the second item appear as first item in any array from set?
            const contains_as_first = set.filter(element => {
                return element[0] == second_item;
            });
            // If (a, b) and (b, c), is (a, c)?
            const items_must_exist = [];
            contains_as_first.forEach(element => {
                const item_must_exist = [first_item, element[1]];
                items_must_exist.push(item_must_exist);
            });
            return items_must_exist.every(item => {
                return set.some(element => {
                    return isSameArray(element, item);
                })
            })
        })
    }


    const checkAssymetrical = (set) => {
        let isAssymetrical = false;

        isAssymetrical = set.every((relation) => {
            let relationReversed = (relation.slice()).reverse()
            return checkAssymetry(relationReversed, set);
        })

        function checkAssymetry(element, set) {
            console.log('Set:', set);
            const setHasRelation = set.some(relation => {
                return isSameArray(relation, element);
            })
            if(setHasRelation) {
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

    function isSameArray(array1, array2) {
        if(array1.length !== array2.length) return false;
        return array1.every((element, index) => {
            return element == array2[index];
        })
    }

    return (
        <div className="output">
            <h3>Relation for set &#123;{rawInput}&#125;</h3>
            <p>Is it reflexive? <strong>{checkReflexive(sampleArray).toString()}</strong></p>
            <p>Is it symmetric? <strong>{checkSymmetrical(sampleArray).toString()}</strong></p>
            <p>Is it antisymmetric? <strong>{(checkAssymetrical(sampleArray)).toString()}</strong></p>
            <p>Is it transitive? <strong>{checkTransitivity(sampleArray).toString()}</strong></p>
        </div>
    )
}

export default Output;