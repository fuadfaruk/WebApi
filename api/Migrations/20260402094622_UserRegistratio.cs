using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class UserRegistratio : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "77c16e3f-317c-4f4e-a210-30bad9f5f5fa");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fc5a45db-74b0-4269-a94b-4b83b64cd888");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2fbe98e3-8f36-4798-b0d9-352fd4fad3b0", "0d879fe5-944f-4a14-9aca-0d29c27a6d6c", "Admin", "ADMIN" },
                    { "eda5c51f-6969-4efe-82fe-35f3dcd9cea5", "316cf955-da32-476c-8c54-137a4b57d3ab", "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "77c16e3f-317c-4f4e-a210-30bad9f5f5fa", "338d73ee-4d82-4bf6-b8e2-5ae7fa8151a5", "User", "USER" },
                    { "fc5a45db-74b0-4269-a94b-4b83b64cd888", "a9afd532-7853-4589-8be7-99ab0b3e32fc", "Admin", "ADMIN" }
                });
        }
    }
}
