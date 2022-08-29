
export let Masters;

export const masters = (Lavrikov)=>{
    Masters = Lavrikov.filter(item => item.Masters);

    return Masters;

}



export const CreateMasters = (Masters) => {
    let newMaster;
    if (createMaster) {

        newMaster = {
            id: Masters.length + 1,
            name: createMaster.name
        }
    }
    return Masters
}

export const delMasters = (deleteMaster) => {
    console.log(deleteMaster)
    if (deleteMaster) {
        Masters = Masters.filter(item => item.name !== deleteMaster.name)
    }
    return Masters
}


