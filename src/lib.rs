use std::ffi::CString;
use std::ffi::CStr;

#[no_mangle]
pub extern fn getMD5(input: *const i8) -> *const i8 {
    let input_string = unsafe { CStr::from_ptr(input) };

    let digest = md5::compute(input_string.to_str().unwrap());
    
    let string = CString::new(format!("{:x}", digest)).unwrap();
    let pointer = string.as_ptr();
    std::mem::forget(string);
    pointer
}
