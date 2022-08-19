import mongoose from 'mongoose';

const File = new mongoose.Schema( {
    fileText: { type: String }
} );

export default mongoose.model( 'File', File );