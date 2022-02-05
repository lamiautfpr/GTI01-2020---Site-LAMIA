const { newIdWorks, oldWorks } = require('./oldWorks');
const { oldTypeToNewType, relationType } = require('./typesRelaction');
const slugify = require('../slugify');

const readOldWorks = () => {
  console.log('oldWorks => ', oldWorks.length);
  console.log('newIdWorks => ', newIdWorks.length);

  const newWorks = oldWorks.map((oldWork, index) => ({
    id: newIdWorks[index],
    slug: oldWork.title.slugify(),
    ...oldWork,
  }));

  console.log(newWorks);

  const createRelation = () => {
    const newRelationType = relationType.map((relation) => ({
      tbWorkId: newWorks.find((work) => work.oldKey === relation.oldWork).id,
      tbTypeId: oldTypeToNewType[relation.oldType],
    }));

    // console.log(newRelationType);
  };

  createRelation();
};

readOldWorks();
