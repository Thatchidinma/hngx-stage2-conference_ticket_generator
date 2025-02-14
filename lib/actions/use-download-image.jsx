import html2canvas from "html2canvas";

export const UseDownloadImage = () =>{
    
    const handleDownloadImage = async (ref) => {
    const element = ref.current;

    // Render the element to a canvas
    const canvas = await html2canvas(element);
    
    // Convert the canvas to a data URL (image)
    const imageUrl = canvas.toDataURL("image/png");

    // Create a download link dynamically
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "downloaded-image.png"; // File name
    link.click(); // Trigger the download
  }; 

    return{handleDownloadImage}
}