async function confirmBooking(req, res, entry){
    const data = await client.db('Restaurant').collection('bookedTable').insertOne(JSON.parse(entry));
    console.log(data);
}

async function deleteBooking(booking){
    const data = await client.db('Restaurant').collection('bookedTable');
    const s = await data.deleteOne({_id : new ObjectId(booking)});
    console.log(s);
}

async function bookTable(req, res, date, time){
    const data = await client.db('Restaurant').collection('bookedTable').find({date : date, time : time}).toArray();
    let retData = [];
    await data.forEach(element => {
        console.log(element);
        retData.push(element)
    });
    return res.send(retData)
}

async function showDetails(req, res, userName){
    const data = await client.db('Restaurant').collection('bookedTable').find({ userName: userName }).toArray();
    let retData = [];
    await data.forEach(element => {
        retData.push(element)
    });
    return res.send( retData );
}

const _showDetails = showDetails();
export { _showDetails as showDetails };
const _bookTable = bookTable();
export { _bookTable as bookTable };
const _confirmBooking = confirmBooking();
export { _confirmBooking as confirmBooking };
const _deleteBooking = deleteBooking();
export { _deleteBooking as deleteBooking };