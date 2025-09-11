import React from 'react';
import Carousel from './Carousel';

import StudentTeacher from './Student-Teacher';
import QuickAccess from './QuickAccess';
import System from './System';
import DocumentUpload from './DocumentUpload';
function HomePage() {
    
    return ( 
       <>
       
       <Carousel/>
       <DocumentUpload/>
       <System/>
       <QuickAccess/>
       <StudentTeacher/>

    
       </>
     );
}

export default HomePage;