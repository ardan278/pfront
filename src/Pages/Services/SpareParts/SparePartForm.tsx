import { useState } from "react";

const SparePartForm = () => {
  const [formData, setFormData] = useState({
    partNumber: "",
    description: "",
    quantity: "1",
    manufacturer: "",
    country: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Send image to OCR API
  const handleAutoFill = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);

    try {
      const response = await fetch(
        "https://bright-ewe-inherently.ngrok-free.app/api/ocr/",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      setFormData({
        partNumber: data.data.partNumber || "",
        description: data.data.description || "",
        quantity: data.data.quantity || 1,
        manufacturer: data.data.manufacturer || "",
        country: data.data.country || "",
      });
    } catch (error) {
      console.error("OCR request failed:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create a FormData object
    const formDataObj = new FormData();

    // Append image and other form data to FormData
    if (image) {
      formDataObj.append("image", image); // Assuming 'image' is a file input
    }
    formDataObj.append("partNumber", formData.partNumber);
    formDataObj.append("description", formData.description);
    formDataObj.append("quantity", String(formData.quantity)); // Convert to string if needed
    formDataObj.append("manufacturer", formData.manufacturer);
    formDataObj.append("country", formData.country);

    try {
      const response = await fetch(
        "https://bright-ewe-inherently.ngrok-free.app/api/ack/",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      const responseData = await response.json();
      console.log("Acknowledgement received:", responseData);

      // Handle response data, for example, show confirmation message
      alert("PDF Generated and Submitted Successfully!");
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Spare Part Form</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Left Column */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <label className="block text-sm font-medium">Part Number</label>
              <input
                type="text"
                name="partNumber"
                value={formData.partNumber}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="form-control"
                min="1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Manufacturer</label>
              <input
                type="text"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center">
            <label className="block text-sm font-medium mb-2">
              Upload or Capture Image
            </label>
            <div className="w-48 h-48 border rounded-md overflow-hidden flex items-center justify-center bg-gray-100">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
            <div className="mt-3 flex gap-3">
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <label
                htmlFor="imageInput"
                className="btn btn-secondary text-sm cursor-pointer"
              >
                Upload
              </label>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                id="cameraInput"
                onChange={handleImageChange}
              />
              <label
                htmlFor="cameraInput"
                className="btn btn-primary text-sm cursor-pointer"
              >
                Capture
              </label>
            </div>

            {image && (
              <button
                type="button"
                onClick={handleAutoFill}
                className={`btn btn-success mt-4 w-full ${
                  loading ? "disabled" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Processing..." : "Auto-Fill"}
              </button>
            )}
            <button type="submit" className="btn btn-primary mt-4 w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SparePartForm;
