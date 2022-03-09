import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Styles } from './style/collectionCardStyle';
export default function CollectionCard({info, idx}){
    const navigate = useNavigate()

    const viewDetail = (idx) => {
        navigate(`/collection/${idx}`)
    }

    return (
        <Styles>
            <div className="card-container"
                onClick={() => viewDetail(idx)}
            >
                <div className="card-header">
                    <div className="collection-name">
                        {info.name}
                    </div>
                    <div className="sub-name">
                        {info.subName}
                    </div>
                </div>
                <div className="card-body">
                    <img className='main' src='/img/user/collection/collection.png' alt=''/>
                    <Grid container spacing={2}>
                        <Grid item md={6} sm={6} xs={6}>
                            <img className='child' src='/img/user/collection/collection.png' alt=''/>
                        </Grid>
                        <Grid item md={6} sm={6} xs={6}>
                            <img className='child' src='/img/user/collection/collection.png' alt=''/>
                        </Grid>
                    </Grid>
                    
                </div>
            </div>
        </Styles>
    );
}