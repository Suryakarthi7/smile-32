import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";
import Home from './home';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close'; 
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Helmet } from 'react-helmet';


type Anchor = 'left';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid',
  boxShadow: 24,
  p: 4,
  height:400,
};

type name1 = {
  name?:string;
}

function App() {

  const [state, setState] = React.useState<{left:boolean}>({
   
    left: false,
   
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name,setName] = React.useState<name1['name']>('');
    const [phone,setPhone] = React.useState<number | string>('');
    const [email,setEmail] = React.useState<any>('');

    const handleSubmit1 = (event : any) :void=>{
      
      console.log(name,Number(phone),email);
      if((name == '') || (phone == ('') || Number('')) || (email == '')){
        alert('data give correctly');
        setName('');
        setPhone('');
        setEmail('');
      }else{
        alert('data submit success');
        setName('');
        setPhone('');
        setEmail('');
        setOpen(false);
      }
      
    }

  return (
    <>
    <HashRouter>
     <Helmet>
      <title> Smile 32 </title>
      <meta name='description' content='Your teeth are part of your digestive system. They break down foods by crushing or cutting them before you swallow. Most humans have 32 teeth, although some have more and some have fewer. Enamel (the protective outer layer of your teeth) is the hardest substance in the human body.'/>
     </Helmet>
      <Paper elevation={1} className='z-10 top-0 sticky bg-white'>
      <div className='flex h-[70px] pt-5'>

    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <p onClick={toggleDrawer(anchor, true)} className='pl-[25px] pt-[3px]' data-cy='report-intro'> <MenuIcon className='text-orange-500'/> </p>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{style:{width:280}}}
            >
            <div className='text-orange-500 pl-[80px] pt-[60px] sm:text-[22px] text-[20px]'> 
           <p> Testimonials </p>
                   <br />
           <p> Gallery </p>
           <br />
           <p> Contact </p>
           </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>

    <div className='text-orange-500 text-[22px] pl-[20px]' data-cy='title'>
    <p> Smile 32 Dental Care </p>
    </div>

   
<div className='hidden sm:block text-orange-500 pl-[280px] md:pl-[570px] pt-1 xl:pl-[900px]'>
<p> <TextSnippetOutlinedIcon /> </p>
</div>

<div onClick={handleOpen}>
<p className='hidden sm:block text-orange-500 text-[22px] md:pl-3 pt-0 cursor-pointer' data-cy='form'> Get Quote </p>
</div>
</div>
</Paper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
        <p className='text-lg'> Get Quote <span className='float-right cursor-pointer' onClick={handleClose}> <CloseIcon/> </span></p>
       <br />
        <TextField label="Name" variant="standard" className='w-[350px]' value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type='text' autoFocus={true} data-cy='name'/>
        <TextField label="Phone Number" variant="standard" className='w-[350px]' value={phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} type='number' data-cy='phoneNumber'/>
        <TextField label="Email" variant="standard" className='w-[350px]' helperText="* Valid email addres required" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type='email' data-cy='email'/>
       <br />
       <Button variant='contained' className='translate-x-[350px] translate-y-12' onClick={handleSubmit1} data-cy='submit'> Submit </Button>
        </Box>
      </Modal>

    <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
