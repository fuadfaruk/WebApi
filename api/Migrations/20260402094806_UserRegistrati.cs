using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class UserRegistrati : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2fbe98e3-8f36-4798-b0d9-352fd4fad3b0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "eda5c51f-6969-4efe-82fe-35f3dcd9cea5");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "47627979-7851-42fa-9222-5ddb70acf0b0", "8573ddb5-8cdd-4e52-a4a4-58e310ed4e12", "User", "USER" },
                    { "e9432e9a-cf13-402b-8960-0ac33dad5b0a", "9e5790c3-7a50-4df0-b596-de7d9ebfe10a", "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "47627979-7851-42fa-9222-5ddb70acf0b0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e9432e9a-cf13-402b-8960-0ac33dad5b0a");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2fbe98e3-8f36-4798-b0d9-352fd4fad3b0", "0d879fe5-944f-4a14-9aca-0d29c27a6d6c", "Admin", "ADMIN" },
                    { "eda5c51f-6969-4efe-82fe-35f3dcd9cea5", "316cf955-da32-476c-8c54-137a4b57d3ab", "User", "USER" }
                });
        }
    }
}
