import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-add-sponsors-modal",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Modal Backdrop -->
    <div
      *ngIf="isOpen"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
      (click)="onCancel()"
    >
      <!-- Modal Container -->
      <div
        class="bg-white rounded shadow-lg w-full max-w-[767px] max-h-[95vh] flex flex-col"
        (click)="$event.stopPropagation()"
      >
        <!-- Modal Header - Fixed -->
        <div
          class="flex-shrink-0 px-[30px] py-[30px] border-b border-[#CED4DA]"
        >
          <div class="flex items-center justify-between">
            <h2 class="text-[22px] font-medium text-[#3F4254]">
              {{ editMode ? "Edit Sponsor" : "Add Sponsors" }}
            </h2>
            <button
              type="button"
              (click)="onCancel()"
              class="text-[#3F4254] hover:text-[#212529] transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M0.929495 18C0.692391 18 0.455286 17.9099 0.275141 17.7284C-0.0865054 17.3667 -0.0865054 16.7804 0.275141 16.4187L16.4227 0.271235C16.7843 -0.0904116 17.3706 -0.0904116 17.7323 0.271235C18.0939 0.632881 18.0939 1.2192 17.7323 1.58107L1.58498 17.7284C1.40348 17.9087 1.16637 18 0.929495 18Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.0781 18C16.841 18 16.6042 17.9099 16.4238 17.7284L0.275141 1.58107C-0.0865054 1.2192 -0.0865054 0.632881 0.275141 0.271235C0.636787 -0.0904116 1.22311 -0.0904116 1.58498 0.271235L17.7323 16.4187C18.0939 16.7804 18.0939 17.3667 17.7323 17.7284C17.5508 17.9087 17.3139 18 17.0781 18Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        <!-- Modal Body and Form -->
        <form class="flex-1 flex flex-col min-h-0" (ngSubmit)="onSubmit()">
          <!-- Scrollable Content -->
          <div class="flex-1 overflow-y-auto px-[25px] py-6 min-h-0">
            <!-- Logo Upload -->
            <div class="flex justify-center mb-8">
              <div class="relative">
                <div
                  class="w-[120px] h-[120px] rounded-full border-2 border-[#8B8B8B] bg-[#F5F5F5] flex items-center justify-center overflow-hidden cursor-pointer"
                  (click)="logoInput.click()"
                >
                  <img
                    *ngIf="formData.companyLogo"
                    [src]="formData.companyLogo"
                    alt="Company Logo"
                    class="w-full h-full object-cover"
                  />
                  <svg
                    *ngIf="!formData.companyLogo"
                    width="60"
                    height="60"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="15"
                      y="25"
                      width="70"
                      height="55"
                      rx="6"
                      fill="#5B7285"
                    />
                    <rect
                      x="35"
                      y="15"
                      width="30"
                      height="20"
                      rx="3"
                      fill="#5B7285"
                    />
                    <rect
                      x="70"
                      y="28"
                      width="12"
                      height="10"
                      rx="2"
                      fill="#6FB3A5"
                    />
                    <circle
                      cx="50"
                      cy="52"
                      r="12"
                      fill="none"
                      stroke="white"
                      stroke-width="3"
                    />
                  </svg>
                </div>
                <button
                  type="button"
                  (click)="logoInput.click()"
                  class="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-[#009FD8] flex items-center justify-center shadow-md hover:bg-[#0385b5] transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8333 3.16667L16.8333 2.16667C17.5 1.5 18.5833 1.5 19.25 2.16667C19.9167 2.83333 19.9167 3.91667 19.25 4.58333L18.25 5.58333"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 16.6667H2V18C2 18.5523 2.44772 19 3 19H4.33333V17.6667"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.25 5.58333L5.5 18.3333C5.03333 18.8 4.33333 19 3.5 19H2V17.5C2 16.6667 2.2 15.9667 2.66667 15.5L15.4167 2.75"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <input
                #logoInput
                type="file"
                accept="image/*"
                class="hidden"
                (change)="onLogoChange($event)"
              />
            </div>

            <!-- Company Name -->
            <div class="mb-6">
              <label class="block text-base font-medium text-[#212529] mb-2">
                Company Name
              </label>
              <input
                type="text"
                [(ngModel)]="formData.companyName"
                name="companyName"
                placeholder="Enter company name"
                class="w-full h-[50px] px-5 border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors"
                required
              />
            </div>

            <!-- Email and Phone Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <!-- Email -->
              <div>
                <label class="block text-base font-medium text-[#212529] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  [(ngModel)]="formData.email"
                  name="email"
                  placeholder="Enter email address"
                  class="w-full h-[50px] px-5 border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors"
                  required
                />
              </div>

              <!-- Phone -->
              <div>
                <label class="block text-base font-medium text-[#212529] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  [(ngModel)]="formData.phone"
                  name="phone"
                  placeholder="Enter phone number"
                  class="w-full h-[50px] px-5 border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors"
                  required
                />
              </div>
            </div>

            <!-- Track and Sequence Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <!-- Track -->
              <div>
                <label class="block text-base font-medium text-[#212529] mb-2">
                  Track
                </label>
                <div class="relative">
                  <select
                    [(ngModel)]="formData.track"
                    name="track"
                    class="w-full h-[50px] px-5 pr-10 border-2 border-[#E9EBEC] rounded text-base focus:outline-none focus:border-[#009FD8] appearance-none bg-white transition-colors"
                    required
                  >
                    <option value="">Select a track</option>
                    <option value="Gold Sponsors">Gold Sponsors</option>
                    <option value="Silver Sponsors">Silver Sponsors</option>
                    <option value="Bronze Sponsors">Bronze Sponsors</option>
                    <option value="Organized By">Organized By</option>
                    <option value="Co-Organized">Co-Organized</option>
                  </select>
                  <svg
                    class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="#686868"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <!-- Sequence -->
              <div>
                <label class="block text-base font-medium text-[#212529] mb-2">
                  Sequence
                </label>
                <input
                  type="number"
                  [(ngModel)]="formData.sequence"
                  name="sequence"
                  placeholder="Enter sequence number"
                  class="w-full h-[50px] px-5 border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors"
                  min="1"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Modal Footer - Fixed -->
          <div
            class="flex-shrink-0 flex items-center justify-between px-[30px] py-6 border-t border-[#CED4DA] gap-4"
          >
            <button
              type="button"
              (click)="onCancel()"
              class="flex-1 h-[50px] px-6 border-2 border-[#CED4DA] rounded font-semibold text-[#686868] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="flex-1 h-[50px] px-6 bg-[#009FD8] hover:bg-[#0385b5] text-white rounded font-semibold transition-colors"
            >
              {{ editMode ? "Update" : "Add" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
})
export class AddSponsorsModalComponent {
  @Input() isOpen = false;
  @Input() editMode = false;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  formData = {
    companyName: "",
    email: "",
    phone: "",
    track: "",
    sequence: 1,
    companyLogo: "",
  };

  onLogoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.formData.companyLogo = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit(): void {
    if (
      this.formData.companyName &&
      this.formData.email &&
      this.formData.phone &&
      this.formData.track &&
      this.formData.sequence
    ) {
      this.submit.emit({ ...this.formData });
      this.resetForm();
      this.close.emit();
    }
  }

  onCancel(): void {
    this.resetForm();
    this.close.emit();
  }

  private resetForm(): void {
    this.formData = {
      companyName: "",
      email: "",
      phone: "",
      track: "",
      sequence: 1,
      companyLogo: "",
    };
  }
}
