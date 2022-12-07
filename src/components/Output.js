function Output() {
    const sampleArray = [[1, 1], [2, 2], [2,3], [3,2],[3, 1]];

    const checkReflexive = (set) => {
        let checkedElements = [];
        return set.every(relation => {
             if(isChecked(relation[0], checkedElements)) return;
             checkedElements.push(relation[0]);
             return hasSomeReflection(relation[0], set);
        });

        function hasSomeReflection(element, relations) {
            return relations.some(relation => {
                return element == relation[0] && element == relation[1];
            });
        }
    }

    const isChecked = (element, checkedElements) => {
        return checkedElements.find(checkedElement => {
            return element == checkedElement;
        });
    }

    const checkSymmetrical = (set) => {
        let checkedRelations = [];
        return set.every(relation => {
            if(isChecked(relation, checkedRelations)) return;
            checkedRelations.push(relation);
            let relationReversed = (relation.slice()).reverse();
            return hasSomeSymmetry(relationReversed, set);
        });

        function hasSomeSymmetry(element, relations) {
            return relations.some(relation => {
                return element[0] == relation[0] && element[1] == relation[1]
            });
        }
    }
    console.log(checkSymmetrical(sampleArray));

    return (
        <div className="output">

        </div>
    )
}

export default Output;